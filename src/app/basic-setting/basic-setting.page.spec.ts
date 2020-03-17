import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicSettingPage } from './basic-setting.page';

describe('BasicSettingPage', () => {
  let component: BasicSettingPage;
  let fixture: ComponentFixture<BasicSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
