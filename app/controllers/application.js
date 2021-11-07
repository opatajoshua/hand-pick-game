import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import confetti from 'canvas-confetti'

export default class ApplicationController extends Controller {
  constructor(){
    super(...arguments);
    this.correctHand=this.guessHand();
  }

  @service intl;

  @tracked handState = 'fold';
  @tracked correctHand = 'right';
  @tracked selectedHand = null;
  @tracked playerScore = 0;
  @tracked machineScore = 0;
  @tracked clueMode = 0;

  @action
  switchLang(event) {
    this.intl.setLocale(event.target.value);
  }

  @action
  handClick(hand) {
    // if(this.handState!='fold')
    //   return;
    this.selectedHand = hand;
    this.handState='open';
    if(hand==this.correctHand){
      this.playerScore++;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }else{
      this.machineScore++;
    }

    setTimeout(() => {
      this.selectedHand=null;
      this.correctHand=this.guessHand();
      this.handState='fold';
    }, 2000);

    console.log('hand', hand);
    
  }

  @action
  reset(){
    if(this.handState!='fold')
      return;
    this.playerScore = 0;
    this.machineScore = 0;
    this.selectedHand=null;
    this.correctHand=this.guessHand();
    this.handState='fold';
  }

  @action
  clue(){
    this.clueMode=true
    setTimeout(() => {
      this.clueMode=false
    }, 2000);
  }

  guessHand() {
    return (Math.random()>=0.5)? 'right' : 'left';
  }
}
