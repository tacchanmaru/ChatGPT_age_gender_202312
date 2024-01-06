import React, { useEffect, useState, useRef } from "react";

type Props = {
  userGender: string;
  dbCount: number;
  progressNum: number;
  attractiveValue: string;
  setAttractiveValue: React.Dispatch<React.SetStateAction<string>>;
  setPoliteValue: React.Dispatch<React.SetStateAction<string>>;
  setTrustValue: React.Dispatch<React.SetStateAction<string>>;
};

const ProductDescription: React.FC<Props> = (props) => {

  const elderly_ladies_1 = "ご覧いただきありがとうございます。こちらは、上品な紺色が魅力的なLONGCHAMPのトップハンドルバッグです。サイズは縦26cm、横46cm、まち20cmと、日常使いに適した大きさで、お出かけからビジネスシーンまで幅広くお使いいただけます。\n\n素材は耐久性に優れたナイロン生地と合成皮を使用しており、軽量でありながらもしっかりとした作りが特徴です。内側には1つのポケットがあり、小物の整理に便利です。\n\n状態については、目立った汚れはなく、やや使用感はございますが、まだまだ快適にご使用いただける状態です。シンプルで飽きのこないデザインは、どんな装いにも合わせやすく、長く愛用していただけることでしょう。\n\n大切な方へのプレゼントや、ご自身へのご褒美にいかがでしょうか。この機会にぜひ、ご検討ください。"

  const elderly_ladies_2 = "ご覧いただきありがとうございます。こちらはkiplingブランドのリュックサックで、シックなブラックカラーがどんな装いにも合わせやすいアイテムです。サイズは縦36cm、横30cm、まち10cmと、日常使いに便利な大きさで、お出かけからちょっとした旅行まで幅広くお使いいただけます。\n\n素材は綿で、軽くて丈夫な作りになっております。収納力も抜群で、表面に2つ、背面に1つ、内側に5つのポケットがあり、小物の整理もしやすくなっています。特に内側のポケットは日常の必需品を分けて収納できるため、使い勝手が良いです。\n\n状態はほぼ未使用品となっており、大変綺麗な状態を保っていますが、トップの持ち手部分に小さな傷がございます。ご使用には問題ありませんが、気になる方はご注意ください。\n\nまた、kiplingの特徴であるゴリラのアクセサリーが付いており、ブランドの遊び心を感じさせる一品です。シンプルながらも個性を放つこのリュックで、日々のお出かけをもっと楽しく、快適にしてみませんか？お問い合わせをお待ちしております。"

  const elderly_ladies_3 = "ご覧いただきありがとうございます。こちらは、タイで購入したお土産品のショルダーバッグです。綿素材を使用しており、黄緑と黒の組み合わせが鮮やかな光沢と刺繍で、洗練された印象を与えます。サイズは縦27cm、横32cm、まち11cmと、日常使いに適した大きさで、必要なものがしっかりと収まります。\n\n内側にはファスナー付きの小さいポケットが１つあり、大切な小物を分けて収納することができるので、整理整頓もしやすくなっています。バッグの状態は、目立った汚れはなく、やや使用感はありますが、まだまだご愛用いただける状態です。\n\n普段使いはもちろん、ちょっとしたお出かけにも映えるデザインで、お持ちの服装とも合わせやすいアイテムです。この機会にぜひ、個性的なアクセントをお楽しみください。"

  const elderly_mens_1 = "ご覧いただきありがとうございます。こちらはNOLLEY'Sのダウンジャケット、サイズXL、落ち着いた紺色のお品物です。上品なデザインで、寒い季節のお出かけにも暖かくお過ごしいただけます。\n\n素材は表地裏地ともにポリエステル100%で、中綿にはダウン90%とフェザー10%を使用しており、保温性に優れています。また、取り外し可能なフードが付いており、天候に応じてスタイルを変えることができます。\n\n状態については、目立った汚れはなく、やや使用感はございますが、まだまだご愛用いただける状態です。クローゼットの整理で出品することになりました。\n\nこの機会に是非、ご検討ください。品質の良いアウターをお探しの方におすすめの一着です。ご不明点があればお気軽にお問い合わせください。"

  const elderly_mens_2 = "ご覧いただきありがとうございます。上品なデザインのTAKEO KIKUCHIブランドのジャケットを出品いたします。落ち着いたチャコールグレーの色合いが特徴で、様々なシーンでお使いいただける一着です。\n\nサイズは4となっており、素材はポリエステル、レーヨン、ポリウレタンを使用しておりますので、快適な着心地と適度なストレッチ性を兼ね備えています。ビジネスシーンはもちろん、カジュアルな装いにもマッチする汎用性の高さが魅力です。\n\n状態につきましては、目立った汚れはなく、やや使用感はございますが、まだまだご愛用いただける状態です。クローゼットの整理のため出品することにしました。\n\nシンプルで飽きのこないデザインは、長くご愛用いただけること間違いなしです。この機会にぜひ、ご検討くださいませ。"

  const elderly_mens_3 = "ご覧いただきありがとうございます。こちらはikkaブランドの3wayハーフコート、サイズL、落ち着いたグレー色のお品物です。ポリエステル100%の素材で、耐久性に優れており、様々な気候に対応できるアイテムです。\n\nこのコートの特徴は、内面に取り外し可能なボアが付いていることです。寒い日はボアをつけて暖かく、暖かい日は取り外して軽やかにお使いいただけます。さらに、取り外し可能なフードも付属しており、急な雨や風からも頭部を守ってくれます。\n\n状態については、目立った汚れはなく、やや使用感はございますが、まだまだご愛用いただける状態です。シンプルで飽きのこないデザインは、どんな装いにも合わせやすく、日常使いからちょっとしたお出かけまで幅広くご活用いただけます。\n\nこの機会に是非、お手元に加えていただければと思います。ご質問等がございましたら、お気軽にお問い合わせください。"

  const young_ladies_1 = "おしゃれで実用的なLONGCHAMPのトップハンドルバッグをご紹介します。シックな紺色がどんなスタイルにもマッチし、ナイロン生地と合成皮の組み合わせが耐久性と高級感を兼ね備えています。サイズは縦26cm、横46cm、まち20cmと十分な収納力で、日常使いからちょっとした旅行まで幅広く活躍します。\n\n内側には1つのポケットがあり、小物の整理に便利です。バッグの状態は非常に良好で、目立った汚れはなく、やや使用感はありますが、まだまだ長くご愛用いただけます。\n\nシンプルで飽きのこないデザインは、どんなシーンにも合わせやすく、あなたの日常に上品なアクセントを加えてくれることでしょう。この機会に、クオリティの高いLONGCHAMPのバッグをお手元にいかがでしょうか。"

  const young_ladies_2 = "皆さん、こんにちは！今回ご紹介するのは、スタイリッシュなkiplingブランドのリュックサックです。シンプルながらも機能性に優れたこのアイテムは、日常使いから小旅行まで幅広く活躍してくれること間違いなしです。\n\nサイズは縦36cm、横30cm、まち10cmと、ちょうど良い大きさで、必要なものをしっかり収納できます。カラーはどんなスタイルにも合わせやすいブラック。素材は綿で、軽くて丈夫なので、長時間の使用でも疲れにくいですよ。\n\nポケットは非常に充実しており、表面に2つ、背面に1つ、内側に5つと、小物の整理にも困りません。内側のポケットは特に便利で、スマホや財布などの大切なアイテムをすぐに取り出せます。\n\n状態はほぼ未使用品で、非常に綺麗な状態を保っていますが、トップの持ち手部分には小さな傷があります。ご了承ください。\n\nおまけに、kiplingのトレードマークであるゴリラのアクセサリーも付いています。このリュックで、あなたの日常にちょっとした楽しさと機能性をプラスしませんか？お待ちしております！"

  const young_ladies_3 = "おしゃれなショルダーバッグをお探しの方、必見です！こちらは、タイで購入したユニークなデザインのバッグで、縦27cm、横32cm、まち11cmの使いやすいサイズ感です。鮮やかな黄緑色に黒を組み合わせたカラーリングが目を引き、光沢と刺繍がアクセントになっています。\n\n素材は綿で、軽くて持ち運びやすいのが特徴。内側にはファスナー付きの小さいポケットが１つあり、大切な小物を収納するのに便利です。バッグの状態は良好で、目立った汚れはなく、やや使用感はありますが、まだまだご愛用いただけます。\n\n日常使いはもちろん、ちょっとしたお出かけにもぴったりなこのバッグで、あなたのコーディネートにエキゾチックなスパイスを加えてみませんか？お手頃な価格で、タイの雰囲気を感じられる一品をお届けします。お早めにどうぞ！"

  const young_mens_1 = "冬の寒さに負けないおしゃれを楽しみたい方におすすめのNOLLEY'Sダウンジャケットをご紹介します。サイズはゆったりとしたXLで、深みのある紺色がどんなスタイルにもマッチします。素材は表地裏地ともにポリエスタル100%で、中綿には暖かさを保つダウン90%とフェザー10%を使用しており、冬の厳しい寒さからしっかりと保護してくれます。\n\nこのジャケットの特徴は、取り外し可能なフードがついている点です。気分や天候に合わせてスタイルを変えることができるので、一着で様々なシーンに対応可能です。状態は目立った汚れがなく、やや使用感はありますが、まだまだ長くご愛用いただける品質を保っています。\n\n寒い季節のアウター選びに悩んでいる方、スタイリッシュながらも機能性を重視したい方には、このNOLLEY'Sダウンジャケットがぴったりです。お早めにご検討ください。"

  const young_mens_2 = "ご覧いただきありがとうございます。スタイリッシュなメンズジャケットをお探しの方におすすめの一品です。\n\nこちらは、洗練されたデザインで知られるTAKEO KIKUCHIのジャケット。サイズは4で、スリムなシルエットをお楽しみいただけます。色は落ち着いたチャコールグレーで、どんなシーンにもマッチしやすく、様々なスタイルに合わせやすいのが特徴です。\n\n素材はポリエステル、レーヨン、ポリウレタンを使用しており、快適な着心地と同時に、適度なストレッチ性がありますので、動きやすさも抜群です。\n\n状態は目立った汚れがなく、やや使用感はありますが、まだまだご愛用いただけるコンディションです。オンにもオフにも活躍すること間違いなしのジャケットを、この機会にぜひお手元に加えてみてはいかがでしょうか。\n\nご質問等があれば、お気軽にお問い合わせください。お待ちしております。"

  const young_mens_3 = "ご覧いただきありがとうございます。こちらはikkaブランドの3wayハーフコート、サイズLの出品です。シックなグレー色で、どんなスタイルにも合わせやすいアイテムです。\n\nこのコートの最大の特徴は、内面に取り外し可能なボアがついており、気温やシーンに合わせて3通りのスタイリングが楽しめる点です。寒い日はボアをつけて暖かく、暖かい日は取り外して軽やかに。また、取り外し可能なフードも付属しており、急な雨や風からもしっかりと守ってくれます。\n\n素材はポリエステル100%で、耐久性に優れており、お手入れも簡単です。状態は目立った汚れはなく、やや使用感はありますが、まだまだご愛用いただけるコンディションです。\n\n機能性とデザイン性を兼ね備えたこのコートで、あなたの冬のスタイルを格上げしませんか？お早めにご検討ください。"

  

  const text_with_space = (text: string) => {
    return text.split('\n').map((str, index) => (
      <span key={index}>
        {str}
        <br />
      </span>
    ));
  }

  const product_description = (position: string) => {
    if (props.userGender === "woman"  && props.dbCount % 3 === 1){
      if ((props.dbCount % 2 === 0 && position === "left") || (props.dbCount % 2 === 1 && position === "right")){
        return young_ladies_1
      } else {
        return elderly_ladies_1
      }
    } else if (props.userGender === "woman"  && props.dbCount % 3 === 2){
      if ((props.dbCount % 2 === 0 && position === "left") || (props.dbCount % 2 === 1 && position === "right")){
        return young_ladies_2
      } else {
        return elderly_ladies_2
      }
    } else if (props.userGender === "woman"  && props.dbCount % 3 === 0){
      if ((props.dbCount % 2 === 0 && position === "left") || (props.dbCount % 2 === 1 && position === "right")){
        return young_ladies_3
      } else {
        return elderly_ladies_3
      }
    } else if (props.userGender === "man"  && props.dbCount % 3 === 1){
      if ((props.dbCount % 2 === 0 && position === "left") || (props.dbCount % 2 === 1 && position === "right")){
        return young_mens_1
      } else {
        return elderly_mens_1
      }
    } else if (props.userGender === "man"  && props.dbCount % 3 === 2){
      if ((props.dbCount % 2 === 0 && position === "left") || (props.dbCount % 2 === 1 && position === "right")){
        return young_mens_2
      } else {
        return elderly_mens_2
      }
    } else if (props.userGender === "man"  && props.dbCount % 3 === 0){
      if ((props.dbCount % 2 === 0 && position === "left") || (props.dbCount % 2 === 1 && position === "right")){
        return young_mens_3
      } else {
        return elderly_mens_3
      }
    } else {
      return ""
    }
  }

  const is20sor60s = (position: string) => {
    if (position === "left") {
      return props.dbCount % 2 === 0 ? "20s" : "60s";
    } else{
      return props.dbCount % 2 === 0 ? "60s" : "20s";
    }
  }

  

  function changeColorLeft() {
    const buttonLeft = document.getElementById("product-description-left");
    const buttonRight = document.getElementById("product-description-right");
    
    if(!buttonLeft?.classList.contains("clicked")){
      buttonLeft?.classList.add("clicked");
    }
    if(buttonRight?.classList.contains("clicked")){
      buttonRight?.classList.remove("clicked");
    }
  }

  function changeColorRight() {
    const buttonLeft = document.getElementById("product-description-left");
    const buttonRight = document.getElementById("product-description-right");
    
    if(!buttonRight?.classList.contains("clicked")){
      buttonRight?.classList.add("clicked");
    }
    if(buttonLeft?.classList.contains("clicked")){
      buttonLeft?.classList.remove("clicked");
    }
  }

  return (
    <div>
      {props.progressNum === 0 && (
        <div className="flex-product-description">
          <div className="product-description">
            {text_with_space(product_description("left"))}
          </div>
          <div className="product-description">
            {text_with_space(product_description("right"))}
          </div>
        </div>
      )}
      {props.progressNum !== 0 && (
        <div className="flex-product-description">
          <div id="product-description-left"
            onClick={() => {
              changeColorLeft();

              if (props.progressNum === 1){
                props.setAttractiveValue(is20sor60s("left"));
              } else if (props.progressNum === 2){
                props.setPoliteValue(is20sor60s("left"));
              } else {
                props.setTrustValue(is20sor60s("left"));
              }
            }}
          >
            {text_with_space(product_description("left"))}
          </div>
          <div id="product-description-right"
            onClick={() => {
              changeColorRight();

              if (props.progressNum === 1){
                props.setAttractiveValue(is20sor60s("right"));
              } else if (props.progressNum === 2){
                props.setPoliteValue(is20sor60s("right"));
              } else {
                props.setTrustValue(is20sor60s("right"));
              }
            }}
          >
            {text_with_space(product_description("right"))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;