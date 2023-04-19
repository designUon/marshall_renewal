import React, { useEffect } from 'react';
const {kakao} = window;

export default function Map() {
    useEffect(() => {
        // const KAKAO_MAP_API_KEY = '370c82bcabaa0eadcba994cdbf1331e3';

        // // 카카오 지도 API 불러오기
        // const script = document.createElement('script');
        // script.async = true;
        // script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&libraries=services`;
        // document.head.appendChild(script);

        // script.onload = () => {
            // Kakao 지도 객체 생성하기
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(37.566826, 126.9786567), // 서울시청
                level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);

            // 마커 추가하기
            const marker = new window.kakao.maps.Marker({
                position: new window.kakao.maps.LatLng(37.5013586, 127.0396017), // 일렉트로마트 위치
                map: map,
            });

            // 정보 창 추가하기
            const infowindow = new window.kakao.maps.InfoWindow({
                content: '<div style="padding:5px;">일렉트로마트</div>',
            });
            window.kakao.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        // };
    }, []);

    return <div id='map' style={{ width: '700px', height: '450px' }} />;
}