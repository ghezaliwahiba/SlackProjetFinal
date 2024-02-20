import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineUserTsComponent } from './online-user.ts.component';

describe('OnlineUserTsComponent', () => {
  let component: OnlineUserTsComponent;
  let fixture: ComponentFixture<OnlineUserTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineUserTsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineUserTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
