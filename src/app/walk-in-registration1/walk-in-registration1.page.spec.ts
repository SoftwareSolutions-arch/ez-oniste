import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalkInRegistration1Page } from './walk-in-registration1.page';

describe('WalkInRegistration1Page', () => {
  let component: WalkInRegistration1Page;
  let fixture: ComponentFixture<WalkInRegistration1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkInRegistration1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalkInRegistration1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
