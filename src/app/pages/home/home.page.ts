import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Auth } from 'aws-amplify';
import { SessionService } from '../../services';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  public idToken: string;
  public accessToken: string;
  public user: any = {};
  private userSub: Subscription;

  constructor(
    private zone: NgZone,
    private session: SessionService,
    private toastCtrl: ToastController
  ) {
  }

  async ngOnInit() {
    await this.subscribeToUser();
    console.log(`ngOnInit() user`, this.user);
    this.idToken = (await Auth.currentSession()).getIdToken().getJwtToken();
    this.accessToken = (await Auth.currentSession()).getAccessToken().getJwtToken();
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  public async copy({ label, text }: { label: string; text: string }) {
    navigator.clipboard.writeText(text).then(async () => {
      console.log('Async: Copying to clipboard was successful!');
      const toast = await this.toastCtrl.create({
        header: `Copied ${label} to clipboard`,
        position: 'top',
        duration: 5000,
        buttons: [{
          icon: 'close',
          role: 'cancel'
        }]
      });
      await toast.present();
    }, async (err) => {
      console.error('Async: Could not copy text: ', err);
      const toast = await this.toastCtrl.create({
        header: `Could not copy text`,
        position: 'top',
        duration: 5000,
        color: `danger`,
        buttons: [{
          icon: 'close',
          role: 'cancel'
        }]
      });
      await toast.present();
    });
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
