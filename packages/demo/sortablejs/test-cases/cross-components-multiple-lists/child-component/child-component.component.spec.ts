import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SortablejsModule } from 'nxt-sortablejs';
import { ChildComponentComponent } from './child-component.component';

describe('ChildComponentComponent', () => {
  let component: ChildComponentComponent;
  let fixture: ComponentFixture<ChildComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponentComponent],
      imports: [
        SortablejsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
