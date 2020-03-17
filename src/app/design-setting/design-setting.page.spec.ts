import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesignSettingPage } from './design-setting.page';

describe('DesignSettingPage', () => {
  let component: DesignSettingPage;
  let fixture: ComponentFixture<DesignSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesignSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
