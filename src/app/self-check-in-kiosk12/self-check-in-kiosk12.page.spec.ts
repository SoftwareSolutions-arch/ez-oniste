import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfCheckInKiosk12Page } from './self-check-in-kiosk12.page';

describe('SelfCheckInKiosk12Page', () => {
  let component: SelfCheckInKiosk12Page;
  let fixture: ComponentFixture<SelfCheckInKiosk12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfCheckInKiosk12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfCheckInKiosk12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
