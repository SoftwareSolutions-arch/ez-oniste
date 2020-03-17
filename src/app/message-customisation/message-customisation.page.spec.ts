import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessageCustomisationPage } from './message-customisation.page';

describe('MessageCustomisationPage', () => {
  let component: MessageCustomisationPage;
  let fixture: ComponentFixture<MessageCustomisationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageCustomisationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageCustomisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
