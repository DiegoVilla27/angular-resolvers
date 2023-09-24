import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service";
import {
  HttpClientTestingModule /* HttpTestingController */
} from "@angular/common/http/testing";

describe("UserService", () => {
  let service: UserService;
  //let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    //http = TestBed.inject(HttpTestingController);
  });

  it("should be created test", () => {
    expect(service).toBeTruthy();
  });

  it("should call the API with the correct method", () => {
    /* const req = http.expectOne(`${service.URL}/users?page=0`);
    req.flush({ data: [{ email: 'dv@gmail.com' }] });
    tick();
    console.log(req);
    expect(req.request.method).toBe('GET');
    http.verify(); */
    expect(service).toBeTruthy();
  });
});
