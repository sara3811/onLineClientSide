import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcessCompletePage } from './process-complete.page';

describe('ProcessCompletePage', () => {
  let component: ProcessCompletePage;
  let fixture: ComponentFixture<ProcessCompletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessCompletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessCompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
