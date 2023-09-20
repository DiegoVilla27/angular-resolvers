import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { EGender, IUser } from "../interfaces/user.interface";
import { UserService } from "./user.service";

const usersExpected: IUser[] = [
  {
    "gender": EGender.Male,
    "name": {
      "title": "Mr",
      "first": "پرهام",
      "last": "پارسا"
    },
    "location": {
      "street": {
        "number": 7825,
        "name": "شورا"
      },
      "city": "بجنورد",
      "state": "خوزستان",
      "country": "Iran",
      "postcode": 16274,
      "coordinates": {
        "latitude": "15.2865",
        "longitude": "-178.5380"
      },
      "timezone": {
        "offset": "+3:00",
        "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
      }
    },
    "email": "prhm.prs@example.com",
    "login": {
      "uuid": "fc8c8361-bc1f-4fa5-8611-f8f986651c94",
      "username": "bigbutterfly948",
      "password": "ghost1",
      "salt": "SVh70NxF",
      "md5": "d07cebeecf3697fa3c3a1f0a3f3fcb75",
      "sha1": "a8661b54e87cff2dca29836073f4d805b9d8e295",
      "sha256":
        "ffad5bb28ee2ef6f2d3e2f719041f93783f188f665322702f1b55d4e43be05fd"
    },
    "dob": {
      "date": "1974-09-06T15:20:53.526Z",
      "age": 49
    },
    "registered": {
      "date": "2022-03-27T04:17:38.278Z",
      "age": 1
    },
    "phone": "054-43075294",
    "cell": "0923-864-2106",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/59.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/59.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/59.jpg"
    },
    "nat": "IR"
  },
  {
    "gender": EGender.Female,
    "name": {
      "title": "Miss",
      "first": "Elizabeth",
      "last": "Walker"
    },
    "location": {
      "street": {
        "number": 7166,
        "name": "Atkinson Avenue"
      },
      "city": "Hamilton",
      "state": "West Coast",
      "country": "New Zealand",
      "postcode": 60810,
      "coordinates": {
        "latitude": "76.0878",
        "longitude": "-18.9516"
      },
      "timezone": {
        "offset": "+11:00",
        "description": "Magadan, Solomon Islands, New Caledonia"
      }
    },
    "email": "elizabeth.walker@example.com",
    "login": {
      "uuid": "35da7420-ace3-4d0f-b04f-9003442cd9dd",
      "username": "smallsnake374",
      "password": "mariner",
      "salt": "ccmrsiV2",
      "md5": "efee4a6657dde954c4a3f51769dd9ee7",
      "sha1": "f650efcacac44dd7519fef6336e847cdf7270f44",
      "sha256":
        "4ca13679b852b34be303ab685159787d7e39e951cecc158bb327a59d0eb69b23"
    },
    "dob": {
      "date": "1954-08-06T12:10:33.637Z",
      "age": 69
    },
    "registered": {
      "date": "2021-06-07T23:23:18.584Z",
      "age": 2
    },
    "phone": "(612)-349-0042",
    "cell": "(680)-797-8724",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/5.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/5.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
    },
    "nat": "NZ"
  }
];

describe("UserService", () => {
  let service: UserService;
  let spyUserService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    spyUserService = jasmine.createSpyObj("UserService", {
      "getUsers": of(usersExpected)
    });

    await TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: spyUserService
        }
      ]
    });

    service = TestBed.inject(UserService);
  });

  it("Create", () => {
    expect(service).toBeTruthy();
  });
});
