import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelServiceComponent } from './channel.service.component';

describe('ChannelServiceComponent', () => {
  let component: ChannelServiceComponent;
  let fixture: ComponentFixture<ChannelServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChannelServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChannelServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
