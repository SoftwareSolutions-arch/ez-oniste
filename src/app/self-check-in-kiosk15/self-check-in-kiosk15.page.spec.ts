import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfCheckInKiosk15Page } from './self-check-in-kiosk15.page';

describe('SelfCheckInKiosk15Page', () => {
  let component: SelfCheckInKiosk15Page;
  let fixture: ComponentFixture<SelfCheckInKiosk15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfCheckInKiosk15Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfCheckInKiosk15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
