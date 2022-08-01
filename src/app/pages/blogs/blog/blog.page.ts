import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService } from '../../../API.service';
import { AlertController, AlertInput } from '@ionic/angular';
import { SessionService } from '../../../services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})
export class BlogPage implements OnInit, OnDestroy {
  public blogId: string;
  public blog: any;
  public posts: any[] = [];
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
    this.blogId = this.activatedRoute.snapshot.paramMap.get('id');
    this.blog = this.router.getCurrentNavigation()?.extras?.state?.item;
    await this.subscribeToUser();
    await this.zone.run(async () => {
      if (this.blogId && !this.blog) {
        this.blog = await this.apiService.GetBlog(this.blogId);
      }
      console.log(`blog`, this.blog);
      this.setPosts(this.blog.posts.items);
    });
    this.apiService.OnCreatePostListener(this.user.sub).subscribe((evt) => {
      const post = (evt as any).value.data.onCreatePost;
      console.log(`OnCreatePostListener()`, post);
      if (post.blog?.id === this.blogId) {
        this.setPosts([...this.posts, post]);
      }
    });
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  async navigate(item: any) {
    await this.router.navigateByUrl(`/blogs/blog/${this.blogId}/blogpost/${item.id}`, { state: item });
  }

  async createBlogPost() {
    const inputs: AlertInput[] = [{
      type: `text`,
      name: `title`,
      placeholder: `Blog Post Title`
    }];
    const alert = await this.alertCtrl.create({
      header: `Create Blog Post`,
      message: `Enter a title for your blog post.`,
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
            await this.apiService.CreatePost({
              title: data.title,
              blogPostsId: this.blogId
            });
          }
        }
      ]
    });
    await alert.present();
  }

  private setPosts(items: any[]) {
    this.posts = items.sort((a, b) =>
      a.title > b.title ? 1 :
        a.title < b.title ? -1 : 0
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
