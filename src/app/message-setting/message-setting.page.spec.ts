import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessageSettingPage } from './message-setting.page';

describe('MessageSettingPage', () => {
  let component: MessageSettingPage;
  let fixture: ComponentFixture<MessageSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
