/*
  강의 열람 권한 정리
  1. admin : user table의 admin column으로 구분(1: admin, 0: normal)
  2. 모든 강의 열람 허용 : initialApply < 최신 LectureId 인 경우
  3. 최근 강의만 열람 허용: initialApply == 최신 LectureId 인 경우
  4. 강의 열람 허용 X( 신청 기간 외에 신청 ) : initialApply == 0 인 경우
*/
const models = require('../models');

/**
 * 강의 정보를 볼 권한을 확인
 * @param {integer} lectureId
 * @param {object} user 유저 정보( admin, initialApply 포함 ) 
 * @returns {boolean} 허용 여부
 */
const lectureAuth = async(lectureId, user) => {

  const latestID = await models.Lecture.max('id');
  
  if(user.admin) return true
  else if(user.initialApply === 0) return false
  else if(user.initialApply < latestID) return true
  else if(user.initialApply === latestID){
    if(user.initialApply === lectureId) return true
    return false
  }
  else return false
}

module.exports = {
  lectureAuth
}