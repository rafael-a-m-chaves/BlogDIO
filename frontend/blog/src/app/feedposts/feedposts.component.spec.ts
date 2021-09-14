import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedpostsComponent } from './feedposts.component';

describe('FeedpostsComponent', () => {
  let component: FeedpostsComponent;
  let fixture: ComponentFixture<FeedpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedpostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
