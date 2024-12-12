const dataImages = [
  {
    id: 1,
    image: "banhchung.jfif",
    made_in: "Việt Nam",
    name: "Bánh Chưng",
    decs: "Là loại bánh duy nhất có lịch sử lâu đời trong ẩm thực truyền thống Việt Nam còn được sử sách nhắc lại, bánh chưng có vị trí đặc biệt trong tâm thức của cộng đồng người Việt và nguồn gốc của nó về truyền thuyết liên quan đến hoàng tử Lang Liêu vào đời vua Hùng thứ 6. Sự tích trên muốn nhắc nhở con cháu về truyền thống của dân tộc; là lời giải thích ý nghĩa cũng như nguồn cội của Bánh Chưng, Bánh giầy trong văn hóa, đồng thời nhấn mạnh tầm quan trọng của cây lúa và thiên nhiên trong nền văn hoá lúa nước.",
  },
  {
    id: 2,
    image: "bundaumamtom.jfif",
    made_in: "Việt Nam",
    name: "Bún Đậu Mắm Tôm",
    decs: "Bún đậu mắm tôm là món ăn đơn giản, dân dã trong ẩm thực miền Bắc Việt Nam và có xuất xứ từ Hà Nội. Đây là món thường được dùng như bữa ăn nhẹ, ăn chơi, đôi khi là bữa tối chính. Thành phần chính gồm có bún tươi, đậu hũ chiên vàng, chả cốm, thịt luộc, nem chua, dồi, mắm tôm pha tắc, ớt và ăn kèm với các loại rau thơm như tía tô, kinh giới, rau húng, xà lách, cà pháo...Cũng như các món ăn dân gian khác, giá thành rẻ nên được nhiều người giới bình dân ăn nên thu nhập của những người buôn bán những món ăn này khá cao.",
  },
  {
    id: 3,
    image: "banhcuon.jfif",
    made_in: "Việt Nam",
    name: "Bánh Cuốn",
    decs: "Bánh cuốn, còn gọi là bánh mướt hay bánh ướt (khi không có nhân), là một món ăn làm từ bột gạo hấp tráng mỏng, cuộn tròn, bên trong có thể có nhân hành, thịt, mộc nhĩ hoặc không nhân.",
  },
  {
    id: 4,
    image: "banhxeo.jfif",
    name: "Bánh Xèo",
    made_in: "Việt Nam",
    decs: "Bánh xèo là một loại bánh phổ biến ở châu Á, có bột bên ngoài và bên trong có nhân là tôm, thịt, giá đỗ, kim chi, khoai tây, hẹ được rán màu vàng, đúc thành hình tròn hoặc gấp lại thành hình bán nguyệt. Bánh xèo cũng là biểu tượng cho sự sum vầy, đoàn kết của gia đình Việt.",
  },
];

const renderCurrentService = () => {
  var html = "";

  html = dataImages.map((item, index) => {
    return ` <div class="current__service--item">
            <div class="service__item--img">
              <img src=${`./assets/img/${item.image}`} alt=${item.name} />
              <div class="sub-item">
                <h2>Xuất xứ : <span>${item.made_in}</span></h2>
                <p>
                  ${item.decs}
                </p>
              </div>
            </div>

            <h2 class="service__item--text">${item.name}</h2>
            <div class="service__item--btn">
              <button>Đặt ngay</button>
            </div>
          </div>`;
  });

  document.querySelector(".current__service--list").innerHTML = html.join("");
};

renderCurrentService();
