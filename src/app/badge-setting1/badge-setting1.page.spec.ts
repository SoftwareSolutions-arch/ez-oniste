import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BadgeSetting1Page } from './badge-setting1.page';

describe('BadgeSetting1Page', () => {
  let component: BadgeSetting1Page;
  let fixture: ComponentFixture<BadgeSetting1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeSetting1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeSetting1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
