import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfCheckInKiosk4Page } from './self-check-in-kiosk4.page';

describe('SelfCheckInKiosk4Page', () => {
  let component: SelfCheckInKiosk4Page;
  let fixture: ComponentFixture<SelfCheckInKiosk4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfCheckInKiosk4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfCheckInKiosk4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
