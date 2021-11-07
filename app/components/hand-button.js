import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class HandButtonComponent extends Component {
    get imgSrc(){
        if(this.args.state=='open'){
            if(this.args.correct)
                return '/imgs/holding_key.png';
            else
                return this.args.openImage;
        }
        if(this.args.state=='win')
            return '/img/holding_key.png';
        return this.args.foldImage;
    }

    get disabled(){
        return this.args.state!='fold'
    }

    get showClue(){
        return this.args.clueMode && this.args.correct
    }

    get styleClass(){
        if(this.args.state=='open'){
            if(this.args.correct){
                if(this.args.selected)
                    return 'correct-border from-purple-500 to-blue-400'
                else
                    return 'from-purple-500 to-blue-400'
            }
            else{
                if(this.args.selected)
                    return 'wrong-border from-purple-500 to-blue-400'
                else
                    return 'from-purple-500 to-blue-400'
            }
        }
        return 'from-purple-700 to-blue-500 transform duration-500 ease-in-out hover:scale-105'//
    }
}
