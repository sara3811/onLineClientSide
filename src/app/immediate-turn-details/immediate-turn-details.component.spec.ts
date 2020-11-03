import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ImmediateTurnDetailsComponent } from './immediate-turn-details.component';

describe('ImmediateTurnDetailsComponent', () => {
  let component: ImmediateTurnDetailsComponent;
  let fixture: ComponentFixture<ImmediateTurnDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmediateTurnDetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImmediateTurnDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
