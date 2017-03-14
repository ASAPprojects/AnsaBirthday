import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishesCardComponent } from './wishes-card.component';

describe('WishesCardComponent', () => {
  let component: WishesCardComponent;
  let fixture: ComponentFixture<WishesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
