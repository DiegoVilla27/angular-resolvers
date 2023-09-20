import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service";

describe("UserService", () => {
  let service: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: []
    });

    service = TestBed.inject(UserService);
  });

  it("Create", () => {
    expect(service).toBeTruthy();
  });
});
