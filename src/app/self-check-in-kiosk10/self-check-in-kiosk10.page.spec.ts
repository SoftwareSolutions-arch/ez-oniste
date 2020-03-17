import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfCheckInKiosk10Page } from './self-check-in-kiosk10.page';

describe('SelfCheckInKiosk10Page', () => {
  let component: SelfCheckInKiosk10Page;
  let fixture: ComponentFixture<SelfCheckInKiosk10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfCheckInKiosk10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfCheckInKiosk10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
