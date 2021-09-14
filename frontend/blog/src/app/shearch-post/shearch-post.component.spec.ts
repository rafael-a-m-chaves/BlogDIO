import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShearchPostComponent } from './shearch-post.component';

describe('ShearchPostComponent', () => {
  let component: ShearchPostComponent;
  let fixture: ComponentFixture<ShearchPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShearchPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShearchPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
