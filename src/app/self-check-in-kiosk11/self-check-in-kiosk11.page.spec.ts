import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfCheckInKiosk11Page } from './self-check-in-kiosk11.page';

describe('SelfCheckInKiosk11Page', () => {
  let component: SelfCheckInKiosk11Page;
  let fixture: ComponentFixture<SelfCheckInKiosk11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfCheckInKiosk11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfCheckInKiosk11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
