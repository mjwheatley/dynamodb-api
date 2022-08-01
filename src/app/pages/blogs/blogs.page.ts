import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
import { AlertController, AlertInput } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { SessionService } from '../../services';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss']
})
export class BlogsPage implements OnInit, OnDestroy {
  public blogs: any[] = [];
  public user: any = {};
  private userSub: Subscription;

  constructor(
    private apiService: APIService,
    private alertCtrl: AlertController,
    private session: SessionService,
    private zone: NgZone
  ) {
  }

  async ngOnInit() {
    await this.subscribeToUser();
    const blogs = (await this.apiService.ListBlogs()).items;
    this.setBlogs(blogs);
    this.apiService.OnCreateBlogListener(this.user.sub).subscribe((evt) => {
      const blog = (evt as any).value.data.onCreateBlog;
      console.log(`OnCreateBlogListener()`, blog);
      this.setBlogs([...this.blogs, blog]);
    });
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  async createBlog() {
    const inputs: AlertInput[] = [{
      type: `text`,
      name: `blogName`,
      placeholder: `Blog Name`
    }];
    const alert = await this.alertCtrl.create({
      header: `Create Blog`,
      message: `Enter a name for your blog.`,
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
            await this.apiService.CreateBlog({
              name: data.blogName
            });
          }
        }
      ]
    });
    await alert.present();
  }

  private setBlogs(blogs: any[]) {
    this.blogs = blogs.sort((a, b) =>
      a.name > b.name ? 1 :
        a.name < b.name ? -1 : 0
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
