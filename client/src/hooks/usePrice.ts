const usePrice = (price: number) => {
    return price.toString().replaceAll(/\B(?=(\d{3})+(?!\d))/g, " ").concat(" ₽");
}

export default usePrice;