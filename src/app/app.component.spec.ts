import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should navigate to the /users route succesfully", () => {
    const routerSpy = spyOn(component["_router"], "navigate");
    component.goToUsers();
    expect(routerSpy).toHaveBeenCalledWith(["/users"]);
  });
});
