import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoTurnsComponent } from './no-turns.component';

describe('NoTurnsComponent', () => {
  let component: NoTurnsComponent;
  let fixture: ComponentFixture<NoTurnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoTurnsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoTurnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
