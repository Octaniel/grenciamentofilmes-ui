export const encrypt = (info: string) => {
  return btoa(info)
}

export const decrypt = (cipherInfo: any) => {
  return atob(cipherInfo)
}
