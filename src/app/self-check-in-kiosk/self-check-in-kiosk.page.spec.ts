import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfCheckInKioskPage } from './self-check-in-kiosk.page';

describe('SelfCheckInKioskPage', () => {
  let component: SelfCheckInKioskPage;
  let fixture: ComponentFixture<SelfCheckInKioskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfCheckInKioskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfCheckInKioskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
