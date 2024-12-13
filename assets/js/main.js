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
  {
    id: 5,
    image: "bunbohue.jfif",
    name: "Bún Bò Huế",
    made_in: "Miền Trung",
    decs: "Bún bò Huế là một trong những đặc sản của tỉnh Thừa Thiên Huế, điểm tạo nên sự khác biệt của bún bò Huế chính là sợi bún to, lát thịt bò mỏng mà to bản, nước lèo có màu đỏ cam với vị cay nồng hấp dẫn.",
  },
  {
    id: 6,
    image: "banhbotloc.jfif",
    name: "Bánh Bột Lọc",
    made_in: "Miền Trung Việt Nam",
    decs: "Bánh bột lọc là một loại bánh Việt Nam làm từ bột năng, có nguồn gốc ở Huế. Nhân bánh gồm có tôm và thịt được tẩm ướp gia vị, gói trong phần bột rồi bọc ngoài bằng lá chuối. Bánh bột lọc gói lại được xem như cô gái Huế luôn e ấp, dịu dàng trong tà áo dài và nón lá duyên dáng.",
  },
  {
    id: 7,
    image: "banhmi.jfif",
    name: "Bánh Mì",
    made_in: "Việt Nam",
    decs: "Bánh mì Việt Nam là món ăn đặc trưng, kết hợp giữa ẩm thực phương Tây và phương Đông. Bánh mì có vỏ ngoài giòn, ruột mềm, thường được kẹp với các loại nhân như thịt nướng, pate, chả lụa, cùng rau sống, dưa leo, ngò, và gia vị như tương ớt, mắm. Bánh mì Việt Nam nổi bật với sự kết hợp hài hòa giữa các hương vị mặn, ngọt, cay, chua, mang đến cảm giác thú vị cho người thưởng thức.",
  },
  {
    id: 8,
    image: "phobo.jfif",
    name: "Phở",
    made_in: "Miền Bắc Việt Nam",
    decs: "Phở là một món ăn truyền thống của Việt Nam, thành phần chính của phở là bánh phở và nước dùng cùng với thịt bò hoặc thịt gà cắt lát mỏng. Thịt bò thích hợp nhất để nấu phở là thịt, xương từ các giống bò ta (bò nội, bò vàng).",
  },
  {
    id: 9,
    image: "comtam.jfif",
    name: "Cơm Tấm",
    made_in: "Miền Nam Việt Nam",
    decs: "Cơm tấm là món ăn đặc trưng của người miền Nam Việt Nam, được chế biến từ gạo tấm – loại gạo bị vỡ trong quá trình xay xát. Cơm tấm thường được ăn kèm với sườn nướng, chả, bì, và trứng ốp la, tạo nên sự kết hợp hài hòa giữa vị béo ngậy, mặn mà và hương thơm đặc trưng. Món ăn này không chỉ dễ ăn mà còn mang đậm nét văn hóa ẩm thực địa phương, là lựa chọn phổ biến trong bữa sáng hoặc bữa trưa của người dân Sài Gòn.",
  },
  {
    id: 10,
    image: "goicuon.jfif",
    name: "Gỏi Cuốn",
    made_in: "Miền Nam Việt Nam",
    decs: "Gỏi cuốn là một món ăn khá phổ biến ở Việt Nam - bằng các nguyên liệu gồm rau xà lách, húng quế, tía tô, tôm khô, rau thơm, thịt luộc, tôm tươi. Tất cả được cuộn trong vỏ bánh tráng. Gia vị dùng kèm là tương hột trộn với lạc rang giã nhỏ phi bằng dầu ăn với hành khô.... tất cả thái nhỏ và cuộn trong vỏ làm từ bột mì hoặc là tương ớt trộn với lạc rang giã nhỏ phi bằng dầu ăn với hành khô. Đây không chỉ đơn thuần là một món ăn ngon, đầy đủ dinh dưỡng, mang lại năng lượng cho cơ thể của tất cả những người thưởng thức.",
  },
  {
    id: 11,
    image: "nemchua.jfif",
    name: "Nem chua",
    made_in: "Việt Nam",
    decs: "Nem chua là một món ăn sử dụng thịt lợn, lợi dụng men của lá chuối (hoặc lá ổi, lá vông, lá sung) và thính gạo để ủ chín, có vị chua ngậy. Nem Miền Bắc có thể chế biến ăn sống cùng các loại lá đặc biệt; còn Nem Miền Trung (đặc biệt Thanh Hoá và Huế) được đóng gói và lên men trong một số loại lá, trong đó có lá chuối, lá ổi.",
  },
  {
    id: 12,
    image: "thittraugacbep.jfif",
    name: "Thịt Trâu Gác Bếp",
    made_in: "Miền Bắc Việt Nam",
    decs: "Thịt trâu gác bếp là món ăn đặc sản của các dân tộc miền núi phía Bắc, nổi bật với hương vị đậm đà, thơm ngon. Thịt trâu được cắt thành miếng vừa ăn, tẩm ướp gia vị đặc trưng như tỏi, ớt, sả, rồi được treo trên bếp lửa để hun khói trong thời gian dài. Quá trình này không chỉ giúp thịt bảo quản lâu mà còn tạo nên hương vị đặc biệt, dai ngon, hấp dẫn. Thịt trâu gác bếp thường được ăn kèm với cơm, hoặc nhắm rượu, mang đậm hương vị núi rừng.",
  },
  {
    id: 13,
    image: "bunchahanoi.jfif",
    name: "Bún Chả",
    made_in: "Miền Bắc Việt Nam",
    decs: "Bún chả là một món ăn của Việt Nam, bao gồm bún, chả thịt lợn nướng trên than hoa và bát nước mắm chua cay mặn ngọt. Là thứ quà có sức sống lâu bền nhất của Hà Nội, nên có thể coi đây là một trong những đặc sản đặc trưng của ẩm thực Hà thành.",
  },
  {
    id: 14,
    image: "hutieu.jfif",
    name: "Hũ Tiếu",
    made_in: "Miền Nam Việt Nam",
    decs: "Hủ tiếu là một món ăn phát triển đầu tiên ở miền nam Việt Nam với bánh hủ tiếu, nước dùng chính là với thịt bằm nhỏ, lòng heo nấu cùng. Sau đó trụng sơ bánh hủ tiếu với nước dùng, rồi cho các nguyên liệu phụ vào như giá đỗ, hẹ, thịt bằm vào. ",
  },
  {
    id: 15,
    image: "nemlui.jfif",
    name: "Nem Lụi",
    made_in: "Việt Nam",
    decs: "Nem lụi là món ăn đặc trưng của miền Trung Việt Nam, gồm những xiên thịt nướng trên than hồng. Thịt nem thường được làm từ thịt heo băm nhỏ, trộn với gia vị, sau đó quấn quanh que tre và nướng cho đến khi chín vàng. Nem lụi được ăn kèm với bánh tráng, rau sống và các loại gia vị như đậu phộng, dưa leo, chuối chát. Món ăn này có vị thơm ngon, đậm đà, thường được chấm với nước mắm pha chua ngọt.",
  },
  {
    id: 16,
    image: "comlam.jfif",
    name: "Cơm Lam",
    made_in: "Miền Bắc Việt Nam",
    decs: "Cơm lam là món ăn đặc sản của các dân tộc Tây Bắc, đặc biệt là người Thái, H'mông. Món ăn được chế biến từ gạo nếp, nấu trong ống tre hoặc ống nứa, sau khi đã rửa sạch và ngâm nước. Cơm lam có hương vị thơm ngon, dẻo, ngọt tự nhiên nhờ cách nấu đặc biệt trong ống tre, giữ được mùi vị đặc trưng của gạo nếp và tre. Món ăn thường được dùng trong các dịp lễ hội, tụ họp gia đình hoặc làm quà tặng.",
  },
  {
    id: 17,
    image: "banhtrangtron.jfif",
    name: "Bánh Tráng Trộn",
    made_in: "Việt Nam",
    decs: "Bánh tráng trộn là món ăn vặt phổ biến ở miền Nam Việt Nam, đặc biệt tại TP.HCM. Món ăn này có xuất xứ từ các quán vỉa hè và dần trở nên nổi tiếng khắp cả nước. Bánh tráng được cắt sợi nhỏ, trộn với các nguyên liệu như xoài xanh, khô bò, lạc rang, rau răm, và gia vị như mắm, ớt, và nước cốt chanh. Bánh tráng trộn có vị chua, mặn, cay hòa quyện, tạo nên hương vị đặc biệt và hấp dẫn.",
  },
  {
    id: 18,
    image: "banhgoi.jfif",
    name: "Bánh Gối",
    made_in: "Miền Bắc Việt Nam",
    decs: "Bánh gối là món ăn phổ biến ở miền Bắc Việt Nam, đặc biệt là Hà Nội. Món ăn này có xuất xứ từ ẩm thực Trung Hoa, nhưng đã được người Việt biến tấu và phát triển. Bánh gối được làm từ bột mì, nhân gồm thịt lợn, tôm, mộc nhĩ, và các gia vị, sau đó được chiên giòn. Bánh có hình bán nguyệt, lớp vỏ ngoài giòn tan, nhân bên trong thơm ngon, đậm đà, thường được ăn kèm với nước mắm pha chua ngọt.",
  },
  {
    id: 19,
    image: "thitkho.jfif",
    name: "Thịt Kho",
    made_in: "Việt Nam",
    decs: "Thịt kho là món ăn truyền thống của người Việt, đặc biệt phổ biến trong các bữa cơm gia đình và dịp lễ Tết. Thịt thường được kho với nước dừa, nước mắm, đường, và gia vị như tiêu, tỏi, ớt để tạo nên một món ăn đậm đà, thơm ngon. Món ăn này có vị ngọt thanh từ đường, mặn mà từ nước mắm, hòa quyện với hương thơm của thịt heo mềm mại. Thịt kho ăn kèm với cơm nóng, thường có sự kết hợp với trứng cút hoặc hột vịt.",
  },
  {
    id: 20,
    image: "xoixeo.jfif",
    name: "Xôi Xéo",
    made_in: "Việt Nam",
    decs: "Xôi xéo là món ăn đặc trưng của Hà Nội, được làm từ gạo nếp trắng, hấp chín mềm và dẻo. Món xôi này có lớp đậu xanh nghiền nhuyễn, thường được rắc lên trên mặt xôi tạo vị bùi béo. Xôi xéo thường được ăn kèm với mỡ hành, hành phi giòn và lạp xưởng hoặc thịt gà xé. Món ăn này có vị ngọt nhẹ của đậu xanh, mặn mà của mỡ hành và thơm nức mùi gạo nếp, rất hấp dẫn.",
  },
  {
    id: 21,
    image: "bunthitnuong.jfif",
    name: "Bún Thịt Nướng",
    made_in: "Việt Nam",
    decs: "Bún thịt nướng là món ăn phổ biến trong ẩm thực miền Nam, gồm bún tươi, thịt heo nướng (thường là thịt ba chỉ hoặc sườn) được thái lát mỏng và nướng trên than hồng. Món ăn được kết hợp với rau sống như xà lách, rau thơm, giá đỗ và đậu phộng rang. Nước mắm pha chua ngọt, thêm chút tỏi ớt tạo nên hương vị đậm đà. Bún thịt nướng có sự hòa quyện giữa vị ngọt của thịt, tươi mát của rau và mặn ngọt của nước mắm.",
  },
  {
    id: 22,
    image: "banhkhot.jfif",
    name: "Bánh Khọt",
    made_in: "Việt Nam",
    decs: "Bánh khọt là món ăn đặc sản miền Nam Việt Nam, có hình dáng giống chiếc bánh nhỏ, tròn, được làm từ bột gạo pha với nước cốt dừa, tạo nên lớp vỏ giòn mềm. Nhân bánh thường là tôm, mực hoặc thịt, kèm theo hành lá và gia vị. Bánh khọt được chiên trong chảo gang hoặc chảo nhỏ, tạo thành những chiếc bánh vàng ươm, ăn kèm với rau sống và nước mắm chua ngọt. Món ăn này có vị béo ngậy, thơm mùi dừa, rất hấp dẫn.",
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
          </div>`;
  });

  document.querySelector(".current__service--list").innerHTML = html.join("");
};

renderCurrentService();
