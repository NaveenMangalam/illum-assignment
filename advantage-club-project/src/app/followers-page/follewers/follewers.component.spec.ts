import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollewersComponent } from './follewers.component';

describe('FollewersComponent', () => {
  let component: FollewersComponent;
  let fixture: ComponentFixture<FollewersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollewersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
