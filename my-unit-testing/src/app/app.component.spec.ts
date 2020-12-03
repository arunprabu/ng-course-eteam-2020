import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// what component is gonna be tested
// group of test specs - test suite
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // test spec
  it('should create the app', () => {
    // taking the comp for testing
    const fixture = TestBed.createComponent(AppComponent);
    // create an instance of comp class
    const app = fixture.componentInstance;
    // jasmine code -- will check whether the app is running or note
    expect(app).toBeTruthy();
  });

  // test spec
  it(`should have as title 'My Calculator'`, () => {
    // taking the comp for testing
    const fixture = TestBed.createComponent(AppComponent);
    // create an instance of comp class
    const app = fixture.componentInstance;
    // checking whether app has variable title
    expect(app.title).toEqual('My Calculator');
  });

  // test spec
  it('should render title', () => {
    // taking the comp for testing
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // taking the comp html for testing
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Welcome to My Calculator');
  });

  // add functionality
  it('should add numbers', () => {
    // taking the comp for testing
    const fixture = TestBed.createComponent(AppComponent);
    // create an instance of comp class
    const app = fixture.componentInstance;
    // should have add fn and it should return added value
    expect(app.add(10, 20)).toEqual(30);
    expect(app.add(5, 10)).toEqual(15);
    expect(app.add(1, 1)).toEqual(2);
  });

  it('should add and return number', () => {
    // taking the comp for testing
    const fixture = TestBed.createComponent(AppComponent);
    // create an instance of comp class
    const app = fixture.componentInstance;
    // should have add fn and it should return number
    expect(app.add(10, 20)).toBe(30);
  });

  it('should have as text Success! in h1', () => {
    // taking the comp for testing
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // taking the comp html for testing
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Success!');
  });

});
