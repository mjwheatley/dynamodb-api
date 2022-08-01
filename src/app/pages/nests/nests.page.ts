import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService } from '../../API.service';
import { AlertController, AlertInput } from '@ionic/angular';
import { SessionService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nests',
  templateUrl: './nests.page.html',
  styleUrls: ['./nests.page.scss']
})
export class NestsPage implements OnInit, OnDestroy {
  public nests: any[] = [];
  public user: any = {};
  private userSub: Subscription;

  constructor(
    private apiService: APIService,
    private alertCtrl: AlertController,
    private session: SessionService,
    private zone: NgZone,
    private router: Router
  ) {
  }

  async ngOnInit() {
    await this.subscribeToUser();
    const nests = (await this.apiService.ListNestTables()).items;
    this.setNests(nests);
    this.apiService.OnCreateNestTableListener(this.user.sub).subscribe((evt) => {
      const nest = (evt as any).value.data.onCreateNestTable;
      console.log(`OnCreateNestTableListener()`, nest);
      this.setNests([...this.nests, nest]);
    });
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  async createNest() {
    const inputs: AlertInput[] = [{
      type: `text`,
      name: `nestName`,
      placeholder: `Nest Name`
    }, {
      type: `text`,
      name: `nestContent`,
      placeholder: `Nest Content`
    }];
    const alert = await this.alertCtrl.create({
      header: `Create Nest`,
      message: `Create a nest and lay your eggs.`,
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
            await this.apiService.CreateNestTable({
              content: data.nestName,
              nest: {
                id: this.user.sub,
                content: data.nestContent
              }
            });
          }
        }
      ]
    });
    await alert.present();
  }

  private setNests(blogs: any[]) {
    this.nests = blogs.sort((a, b) =>
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
