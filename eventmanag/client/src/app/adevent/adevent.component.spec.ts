import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeventComponent } from './adevent.component';

describe('AdeventComponent', () => {
  let component: AdeventComponent;
  let fixture: ComponentFixture<AdeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
