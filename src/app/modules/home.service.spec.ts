import { TestBed, inject } from '@angular/core/testing';

import { HomeService } from './home.service';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';

describe('HomeService', () => {
  let service: HomeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService]
    });
    service = TestBed.inject(HomeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created the homeservice', () => {
    expect(service).toBeTruthy();
  });

  it('should get api data', inject([HttpTestingController, HomeService], (httpMock: HttpTestingController, homeService: HomeService) => {
    const mockData = {
      cases: '0',
      recovered: '1',
      active: '0',
      deaths: '1'
    };

    homeService.getData().subscribe((event: any) => {
      expect(event).toEqual(mockData);
    });

    const mockReq = httpMock.expectOne(homeService.url);
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(mockData);
    httpMock.verify();
    })
  );

});
