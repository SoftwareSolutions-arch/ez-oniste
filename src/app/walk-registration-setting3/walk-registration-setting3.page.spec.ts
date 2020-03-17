import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalkRegistrationSetting3Page } from './walk-registration-setting3.page';

describe('WalkRegistrationSetting3Page', () => {
  let component: WalkRegistrationSetting3Page;
  let fixture: ComponentFixture<WalkRegistrationSetting3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkRegistrationSetting3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalkRegistrationSetting3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
