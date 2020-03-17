import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfCheckSettingPage } from './self-check-setting.page';

describe('SelfCheckSettingPage', () => {
  let component: SelfCheckSettingPage;
  let fixture: ComponentFixture<SelfCheckSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfCheckSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfCheckSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
