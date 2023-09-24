import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import {
  IResultMultiple,
  IResultSingle,
  IUser
} from "../interfaces/user.interface";
import { HttpErrorResponse } from "@angular/common/http";

const usersMock: IUser[] = [
  {
    id: 1,
    avatar: "User1",
    email: "user@example.com",
    first_name: "John 1",
    last_name: "Smith 1"
  },
  {
    id: 2,
    avatar: "User2",
    email: "user@example.com",
    first_name: "John 2",
    last_name: "Smith 2"
  }
];

describe("UserService", () => {
  let service: UserService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify(); // Verify that there are no pending requests
  });

  it("should be created test", () => {
    expect(service).toBeTruthy();
  });

  /**
   * Lifecycle
   * 1. Call function service.getUsers()
   * 2. Exec http request
   * 3. Mock http response with usersMock and return to service.getUsers() with data
   */
  it("(getUsers) should return an observable of IUser[]", () => {
    service.getUsers().subscribe((users: IUser[] | IUser) => {
      expect(users).toEqual(usersMock);
    });

    const req = http.expectOne(`${service.URL}/users?page=0`);
    req.flush({ data: usersMock } as IResultMultiple);
  });

  it("(getUsers) should call http request to GET method", () => {
    service.getUsers().subscribe();

    const req = http.expectOne(`${service.URL}/users?page=0`);
    expect(req.request.method).toEqual("GET");
  });

  it("(getUser) should return an observable of IUser", () => {
    const id: number = 1;
    service.getUser(id).subscribe((users: IUser) => {
      expect(users).toEqual(usersMock[0]);
    });

    const req = http.expectOne(`${service.URL}/users/${id}`);
    req.flush({ data: usersMock[0] } as IResultSingle);
  });

  it("(getUser) should handle error if user is not found", () => {
    const id: number = 999;
    const errorMessage: string = "User not found";

    service.getUser(id).subscribe(
      (users: IUser) => expect(users).toEqual(usersMock[0]),
      (error: HttpErrorResponse) =>
        expect(error.error["error"]).toEqual(errorMessage)
    );

    const req = http.expectOne(`${service.URL}/users/${id}`);
    req.error(new ErrorEvent("HttpErrorResponse", { error: errorMessage }));
  });

  it("(getUser) should call http request to GET method", () => {
    const id: number = 1;
    service.getUser(id).subscribe();

    const req = http.expectOne(`${service.URL}/users/${id}`);
    expect(req.request.method).toEqual("GET");
  });
});
