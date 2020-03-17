import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewParticipantPage } from './new-participant.page';

describe('NewParticipantPage', () => {
  let component: NewParticipantPage;
  let fixture: ComponentFixture<NewParticipantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewParticipantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewParticipantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
