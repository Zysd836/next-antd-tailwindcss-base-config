export function convertSlug(str: string) {
  let string = str
  string = string.toLowerCase()
  string = string.normalize('NFD')
  string = string.replace(/[\u0300-\u036f]/g, '')
  string = string.replace(/[đĐ]/g, 'd')
  string = string.replace(/([^0-9a-z-\s])/g, '')
  string = string.replace(/(\s+)/g, '-')
  string = string.replace(/^-+|-+$/g, '')
  return string
}

export const numberWithComma = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const objToQueryStr = (object: any) => {
  return Object.keys(object)
    .map((item: string) => {
      if (object[item] !== null && object[item] !== undefined) return `${item}=${object[item]}&`
      return ''
    })
    .join('')
}
export const nonAccent = (str: string = '', strikethrough: boolean = true) => {
  let string = str
  string = string.toLowerCase()
  string = string.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  string = string.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  string = string.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  string = string.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  string = string.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  string = string.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  string = string.replace(/đ/g, 'd')
  string = string.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '')
  string = string.replace(/\u02C6|\u0306|\u031B/g, '')
  if (strikethrough) {
    string = string.replace(/\s/g, '-')
  }
  return string
}

export const numberWithDot = (x: any) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
