import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    liste_fruits: [{
        label: 'Citron',
        maturité: 'La qualité des fruits est déterminée par la teneur en sucre, en vitamines et la quantité de jus.\
        La couleur de la peau n &#039 est en revanche pas déterminante. Des températures nocturnes basses au moment \
        de la maturation accentuent en effet la coloration du fait de l &#039 altération de la chlorophylle qui révèle\
        les pigments jaunes. Un fruit verdâtre peut donc être mûr.\
        Soupesez le fruit avec la main pour vérifier qu &#039 il est lourd et ferme, signe qu &#039 il est gorgé de jus.\
        Sacrifiez éventuellement un fruit que vous coupez en deux pour vérifier que la pulpe est bien colorée et \
        le fruit juteux. Le zeste de la peau, constitué des petites glandes d &#039 huile essentielle, doit dégager \
        de bonnes senteurs citronnées.',
        Conservation: 'De manière générale, les citrons restent frais, souples et tendres pendant environ une semaine,\
       après leur achat. La bonne idée pour les conserver dans de bonnes conditions consiste à les garder, \
       à température ambiante et à l&#039 abri de la lumière, loin des fruits qui produisent de l &#039 éthylène comme les pommes'
      },
      {
        label: 'Mangue',
        maturité: 'Si sa peau est ridée et semble fibreuse, elle ne sera pas bien mûre. Préférez une mangue à la peau bien lisse\
        et légèrement brillante. Elle devra être souple au toucher, mais pas trop molle non plus, au risque d &#039 être passée.\
         Si en la tenant vos doigts s &#039 enfoncent dans la chair, elle est trop mûre.',
        conservation: 'Comme la plupart des fruits exotiques, la mangue se conserve, de préférence dans un endroit frais\
          comme une cave ou un cellier et peut être stockée quelques jours à température ambiante dans une corbeille.\
         Elle supporte en revanche très mal les basses températures : évitez-lui donc le supplice du réfrigérateur !'
      },
      {
        label: 'Banane',
        maturité: 'Pour savoir si votre banane est mûre, il faut qu &#039 elle soit bien jaune. Si elle est verte\
        c &#039 est qu &#039 elle n &#039 est pas assez mûre, si elle est tachetée de noir alors ne tardez pas à \
        la manger sinon elle risque d &#039 être trop mûre.',
        conservation: 'conserver vos bananes à température ambiante, ni trop chaude, ni trop froide. Ne les laissez\
         jamais dans un sac plastique, elles retiennent l &#039 humidité ce qui peut les faire pourrir, ni dans un sac papier\
          où elles noirciront plus vite'
      },
      {
        label: 'Poire',
        maturité: 'La peau doit être lisse et bien tendue. Elle ne doit pas présenter de trace de choc ou de meurtrissure.\
         Le fruit est souple autour du pédoncule lorsqu &#039 il est à maturité. Le pédoncule doit être présent et bien attaché.',
        conservation: 'Si possible, les poires ne doivent pas se toucher lorsqu &#039 elles sont entreposées, étalez-les côte à côte\
          sur des cagettes, dans un endroit obscur, frais (6 à 10°C environ), aéré, et sec. Il est possible de les emballer dans\
           du papier de journal afin d &#039 augmenter encore un peu la durée de conservation.'
      },
      {
        label: 'Ananas',
        maturité: 'Soupesez et sentez-le : il doit être lourd et parfumé. Les feuilles de sa couronne doivent être d &#039 un vert bien franc\
         et d &#039 apparence vigoureuse. Pour juger de la maturité d &#039 un ananas, vous pouvez tirer sur une de ces feuilles : si elle vient \
         facilement, l &#039 ananas est mûr à cœur.',
        conservation: 'Comme beaucoup de fruits, l &#039 ananas supporte mal le froid. Ne le stockez donc pas au réfrigérateur.\
          Il se conserve par contre très bien à l &#039 air ambiant. En fonction de sa maturité lors de l &#039 achat, vous pourrez\
           le conserver jusqu &#039 à une semaine à température ambiante.'
      },
      {
        label: 'Kiwi',
        maturité: 'Le kiwi idéal est brun clair, souple au toucher, cédant presque sous la pression des doigts.\
         S &#039 il est mou, c &#039 est qu &#039 il est trop mûr.',
        conservation: 'La façon la plus simple de conserver des kiwis ? Les placer au réfrigérateur ! Débarrassés de leur emballage et \
         disposés dans le bac à légumes de votre frigo et, ils conserveront jusqu  &#039 à quatre semaines.',
      },
      {
        label: 'Melon',
        maturité: 'soupesez votre melon avant tout. Il doit être lourd, son écorce est souple. \
        un melon mûr exhale un parfum typique. Plus il est mûr, plus il est odorant. ...\
        observez le pédoncule, il se décolle lorsque le fruit est à maturité. La craquelure est le signe extérieur de la richesse du melon…',
        conservation: 'Avant de le consommer, placez-le 1 heure au réfrigérateur, pour le déguster bien frais. Une fois à maturité, vous pouvez \
        le conserver quelques jours dans le bac à légumes de votre réfrigérateur, enveloppé d &#039 un film plastique, pour éviter qu &#039 il communique son odeur.',
      }
    ],
    liste_legumes: [{
        label: 'Avocat',
        maturité: 'c &#039  est trop mûr. Si c &#039 est vert, vous pouvez y aller. Et si la tige ne s &#039  en va pas facilement, c &#039 est que l &#039 avocat n &#039 est pas encore mûr.',
        conservation: 'Pour conserver un avocat tout en boostant son mûrissement, emballez-le simplement dans du papier journal et laissez-le à température ambiante pendant trois à cinq jours.',
      },
      {
        label: 'Aubergine',
        maturité: 'Si vous appuyez doucement du bout des doigts l &#039  aubergine, trois choses différentes peuvent se passer : Si la chair ne se déforme pas\
         ou si elle ne cède pas sous la pression de votre doigt, opposant une ferme résistance, c &#039 est qu &#039  elle n &#039 est pas mûre.',
        conservation: 'Une aubergine bien ferme, sans taches, bien brillante, se conservera à l &#039 air libre pas plus de 2 jours, dans le bac à légumes du réfrigérateur durant une semaine.\
          Ne la placez pas dans un récipient en plastique, ni couverte, elle tiendrait moins longtemps.',
      },
      {
        label: 'Poivron',
        maturité: 'Sa couleur est déterminée soit par son degré de maturité (les poivrons verts sont des poivrons de couleur récoltés immatures) soit par sa variété. Le vert est croquant,\
        fruité, avec un brin d &#039 amertume. Le rouge est doux et presque sucré. Enfin le jaune est tendre, doux et juteux.',
        conservation: 'Conservation des poivrons dans le bac à légumes du réfrigérateur. Le poivron idéal est ferme et dense, avec la peau brillante et sans taches.\
         Pour qu il conserve son allure charnue, évitez de le laisser à l &#039  air libre… Après seulement une semaine à température ambiante, il serait tout flétri !'
      },
      {
        label: 'Potiron',
        maturité: 'Si le potiron est en magasin vous pouvez être sûr qu &#039 il est mur. On reconnaît une courge mûre à sa couleur bien sûr, \
        mais surtout à son pédoncule qui devra être très sec. Le feuillage sera à ce moment-là jauni,\
         et même la plupart du temps complètement desséché. Très important, vous devez absolument récolter vos courges avant les premières gelées.',
        conservation: 'Un espace bien ventilé, à l &#039 abri du froid et une température comprise entre 14 et 20 degrés convient parfaitement.\
          Compter jusqu &#039 à 6 mois de conservation. En tranches : envelopper les tranches dans un film célophane et conserver au réfrigérateur une semaine.',
      },
      {
        label: 'Tomate',
        maturité: 'les tomates rouges sont mûres.Pour choisir de bonnes tomates, il faut avant tout humer leur parfum. C &#039 est le premier indice qui vous mettra\
         sur la voie de tomates goûteuses. Il doit être vert et prononcé, notamment au niveau du pédoncule. Pour savoir si une variété de tomate verte est mûre, vous verrez sa couleur\
          tourner légèrement vers un vert-jaunâtre. La tomate  &#039 Raisin vert &#039 est une tomate cerise avec des fruits assez gros réunis en grappes de 8 à 10 petites tomates.',
        conservation: 'L &#039 endroit idéal pour conserver vos tomates est dans un lieu frais (12°C). Ainsi, elles resteront bonnes pendant 1 semaine. Il vaut mieux ne pas les conserver\
           à proximité de concombres, de brocolis, d &#039 aubergines, de champignons et de choux.',
      },
      {
        label: 'Petits poids',
        maturité: 'Choisissez des petit-pois à la cosse vert vif, bien ferme. Hors saison, craquez pour les petit-pois surgelés, bien meilleurs au goût que ceux en conserve et\
         qui gardent toutes leurs vitamines. Quelques minutes dans l &#039 eau bouillante salée et vous n &#039 vez plus qu &#039 à vous régaler ! Pour garder la belle couleur verte des\
          petit-pois, vous pouvez aussi les plonger dans de l &#039 eau glacée juste après les avoir égouttés pour fixer la chlorophylle.',
        conservation: 'Les petits pois frais se conservent très peu de temps: seulement 2 à 3 jours dans leur gousse, dans le bac du réfrigérateur. Les petits poids écossés seront encore plus fragiles.\
          Si vous voulez garder vos petits pois plus longtemps, mieux vaudra envisager de les congeler ou de les stériliser.',
      }

    ]
  },
  mutations: {},
  actions: {
    
  },
  modules: {}
})