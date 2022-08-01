import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService } from '../../../../API.service';
import { AlertController, AlertInput } from '@ionic/angular';
import { SessionService } from '../../../../services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.page.html',
  styleUrls: ['./blog-post.page.scss'],
})
export class BlogPostPage implements OnInit, OnDestroy {
  public blogPostId: string;
  public blogPost: any;
  public comments: any[] = [];
  public user: any = {};
  private userSub: Subscription;

  constructor(
    private apiService: APIService,
    private alertCtrl: AlertController,
    private session: SessionService,
    private zone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  async ngOnInit() {
    this.blogPostId = this.activatedRoute.snapshot.paramMap.get('id');
    this.blogPost = this.router.getCurrentNavigation()?.extras?.state?.item;
    await this.subscribeToUser();
    await this.zone.run(async () => {
      if (this.blogPostId && !this.blogPost) {
        this.blogPost = await this.apiService.GetPost(this.blogPostId);
      }
      console.log(`blogPost`, this.blogPost);
      this.setPosts(this.blogPost.comments.items);
    });
    this.apiService.OnCreateCommentListener(this.user.sub).subscribe((evt) => {
      const comment = (evt as any).value.data.onCreateComment;
      console.log(`OnCreateCommentListener()`, comment);
      if (comment.post?.id === this.blogPostId) {
        this.setPosts([...this.comments, comment]);
      }
    });
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  async navigate(item: any) {
    await this.router.navigateByUrl(`/blogs/blog/${this.blogPostId}/blogpost/${item.id}`, { state: item });
  }

  async createBlogPostComment() {
    const inputs: AlertInput[] = [{
      type: `text`,
      name: `content`,
      placeholder: `Enter comment`
    }];
    const alert = await this.alertCtrl.create({
      header: `Create Blog Post Comment`,
      message: `Enter your comment for the blog post.`,
      inputs,
      buttons: [
        {
          role: `cancel`,
          text: `Cancel`
        },
        {
          text: `Create`,
          handler: async (data) => {
            console.log(`data`, data);
            await this.apiService.CreateComment({
              content: data.content,
              postCommentsId: this.blogPostId
            });
          }
        }
      ]
    });
    await alert.present();
  }

  private setPosts(items: any[]) {
    this.comments = items.sort((a, b) =>
      a.createdAt > b.createdAt ? 1 :
        a.createdAt < b.createdAt ? -1 : 0
    );
  }

  private async subscribeToUser() {
    this.user = this.session.getUser();
    if (this.user.sub) {

    }
    this.userSub = this.session.getUserAsObservable().subscribe(async (user: any) => {
      await this.zone.run(async () => {
        this.user = user;
        console.log(`HomePage.subscribeToUser() user`, this.user);
      });
    });
  }
}
