## 現場体験研修について
現場体験研修を行うにあたってREADMEの以下を必ず読みましょう！  
__※現場でもREADMEに開発の進め方や開発の規約について書かれていることが非常に多いです。絶対に目を通しましょう。__

## 命名規則について
idやclassNameの命名規則はLCC（ローワーキャメルケース）を採用します。  
例：
```
<div className = lowerCamelCase>
  LCCで命名しましょう。
</div>
```

## ブランチの切り方
developブランチから「feature/自分の名前」でブランチを切ってください。  
例：　feature/Taro-Tanaka

__●ブランチの切り方__  
①git branch　(自分の現在のブランチがmainになっているかを確認)  
②git branch feature/Taro-Tanaka　もしくは　git checkout -b feature/Taro-Tanaka  
③git checkout feature/Taro-Tanaka　（②でcheckout -bをしているのであればこのコマンドは不要）  

__●git branch__  
ブランチの現在地を確認するコマンド  
mainブランチ：実際にリリースするブランチ。最終的に全てのブランチはmainブランチにマージされる。  
developブランチ：mainにマージする前に一旦featureブランチを集約するブランチ。  
featureブランチ：作業・開発を行うブランチ。

__●git branch feature/~~~__  
「feature/~~~ 」というブランチを切ることができるコマンド  

__●git checkout feature/~~~__  
git branchで切った「feature/~~~ 」に移動することができるコマンド  

__●git checkout -b feature/~~~__  
git branchとgit checkoutを同時に行なってくれるコマンド。  
ブランチを切る＆移動を一気に行うことができる。  