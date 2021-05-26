import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    liste_fruits: [{
        picto: require('@/assets/images/picto_fruits/picto_citron.png'),
        label: 'Citron',
        maturite: 'La qualité des fruits est déterminée par la teneur en sucre, en vitamines et la quantité de jus.\
        La couleur de la peau n \' est en revanche pas déterminante. Des températures nocturnes basses au moment \
        de la maturation accentuent en effet la coloration du fait de l\'altération de la chlorophylle qui révèle\
        les pigments jaunes. Un fruit verdâtre peut donc être mûr.\
        Soupesez le fruit avec la main pour vérifier qu\'il est lourd et ferme, signe qu\'il est gorgé de jus.\
        Sacrifiez éventuellement un fruit que vous coupez en deux pour vérifier que la pulpe est bien colorée et \
        le fruit juteux. Le zeste de la peau, constitué des petites glandes d\'huile essentielle, doit dégager \
        de bonnes senteurs citronnées.',
        conservation: 'De manière générale, les citrons restent frais, souples et tendres pendant environ une semaine,\
        après leur achat. La bonne idée pour les conserver dans de bonnes conditions consiste à les garder, \
        à température ambiante et à l\'abri de la lumière, loin des fruits qui produisent de l\'éthylène comme les pommes'
      },
      {
        picto: require('@/assets/images/picto_fruits/picto_mangue.png'),
        label: 'Mangue',
        maturite: 'Si sa peau est ridée et semble fibreuse, elle ne sera pas bien mûre. Préférez une mangue à la peau bien lisse\
        et légèrement brillante. Elle devra être souple au toucher, mais pas trop molle non plus, au risque d\'être passée.\
        Si en la tenant vos doigts s\'enfoncent dans la chair, elle est trop mûre.',
        conservation: 'Comme la plupart des fruits exotiques, la mangue se conserve, de préférence dans un endroit frais\
        comme une cave ou un cellier et peut être stockée quelques jours à température ambiante dans une corbeille.\
        Elle supporte en revanche très mal les basses températures : évitez-lui donc le supplice du réfrigérateur !'
      },
      {
        picto: require('@/assets/images/picto_fruits/picto_banane.png'),
        label: 'Banane',
        maturite: 'Pour savoir si votre banane est mûre, il faut qu\'elle soit bien jaune. Si elle est verte\
        c\'est qu\'elle n\'est pas assez mûre, si elle est tachetée de noir alors ne tardez pas à \
        la manger sinon elle risque d\'être trop mûre.',
        conservation: 'conserver vos bananes à température ambiante, ni trop chaude, ni trop froide. Ne les laissez\
        jamais dans un sac plastique, elles retiennent l\'humidité ce qui peut les faire pourrir, ni dans un sac papier\
        où elles noirciront plus vite'
      },
      {
        picto: require('@/assets/images/picto_fruits/picto_poire.png'),
        label: 'Poire',
        maturite: 'La peau doit être lisse et bien tendue. Elle ne doit pas présenter de trace de choc ou de meurtrissure.\
        Le fruit est souple autour du pédoncule lorsqu\'il est à maturité. Le pédoncule doit être présent et bien attaché.',
        conservation: 'Si possible, les poires ne doivent pas se toucher lorsqu\'elles sont entreposées, étalez-les côte à côte\
        sur des cagettes, dans un endroit obscur, frais (6 à 10°C environ), aéré, et sec. Il est possible de les emballer dans\
        du papier de journal afin d\'augmenter encore un peu la durée de conservation.'
      },
      {
        picto: require('@/assets/images/picto_fruits/picto_ananas.png'),
        label: 'Ananas',
        maturite: 'Soupesez et sentez-le : il doit être lourd et parfumé. Les feuilles de sa couronne doivent être d\'un vert bien franc\
        et d\'apparence vigoureuse. Pour juger de la maturité d\'un ananas, vous pouvez tirer sur une de ces feuilles : si elle vient \
        facilement, l\'ananas est mûr à cœur.',
        conservation: 'Comme beaucoup de fruits, l\'ananas supporte mal le froid. Ne le stockez donc pas au réfrigérateur.\
        Il se conserve par contre très bien à l\'air ambiant. En fonction de sa maturité lors de l\'achat, vous pourrez\
        le conserver jusqu\'à une semaine à température ambiante.'
      },
      {
        picto: require('@/assets/images/picto_fruits/picto_kiwi.png'),
        label: 'Kiwi',
        maturite: 'Le kiwi idéal est brun clair, souple au toucher, cédant presque sous la pression des doigts.\
        S\'il est mou, c\'est qu\'il est trop mûr.',
        conservation: 'La façon la plus simple de conserver des kiwis ? Les placer au réfrigérateur ! Débarrassés de leur emballage et \
        disposés dans le bac à légumes de votre frigo et, ils conserveront jusqu\'à quatre semaines.',
      },
      {
        picto: require('@/assets/images/picto_fruits/picto_melon.png'),
        label: 'Melon',
        maturite: 'Soupesez votre melon avant tout. Il doit être lourd, son écorce est souple. \
        un melon mûr exhale un parfum typique. Plus il est mûr, plus il est odorant. ...\
        observez le pédoncule, il se décolle lorsque le fruit est à maturité. La craquelure est le signe extérieur de la richesse du melon…',
        conservation: 'Avant de le consommer, placez-le 1 heure au réfrigérateur, pour le déguster bien frais. Une fois à maturité, vous pouvez \
        le conserver quelques jours dans le bac à légumes de votre réfrigérateur, enveloppé d\'un film plastique, pour éviter qu\'il communique son odeur.',
      }
    ],
    liste_legumes: [{
        picto:require('@/assets/images/picto_legumes/picto_avocat.png'),
        label: 'Avocat',
        maturite: 'Si il est noir, c\'est trop mûr. Si il est vert, vous pouvez y aller. Et si la tige ne s\'en va pas facilement, c\'est que l\'avocat n\'est pas encore mûr.',
        conservation: 'Pour conserver un avocat tout en boostant son mûrissement, emballez-le simplement dans du papier journal et laissez-le à température ambiante pendant trois à cinq jours.',
      },
      {
        picto:require('@/assets/images/picto_legumes/picto_aubergine.png'),
        label: 'Aubergine',
        maturite: 'Si vous appuyez doucement du bout des doigts l\'aubergine, trois choses différentes peuvent se passer : Si la chair ne se déforme pas\
        ou si elle ne cède pas sous la pression de votre doigt, opposant une ferme résistance, c\'est qu\'elle n\'est pas mûre.',
        conservation: 'Une aubergine bien ferme, sans taches, bien brillante, se conservera à l\'air libre pas plus de 2 jours, dans le bac à légumes du réfrigérateur durant une semaine.\
        Ne la placez pas dans un récipient en plastique, ni couverte, elle tiendrait moins longtemps.',
      },
      {
        picto:require('@/assets/images/picto_legumes/picto_poivron.png'),
        label: 'Poivron',
        maturite: 'Sa couleur est déterminée soit par son degré de maturité (les poivrons verts sont des poivrons de couleur récoltés immatures) soit par sa variété. Le vert est croquant,\
        fruité, avec un brin d\'amertume. Le rouge est doux et presque sucré. Enfin le jaune est tendre, doux et juteux.',
        conservation: 'Conservation des poivrons dans le bac à légumes du réfrigérateur. Le poivron idéal est ferme et dense, avec la peau brillante et sans taches.\
        Pour qu il conserve son allure charnue, évitez de le laisser à l\'air libre… Après seulement une semaine à température ambiante, il serait tout flétri !'
      },
      {
        picto:require('@/assets/images/picto_legumes/picto_potiron.png'),
        label: 'Potiron',
        maturite: 'Si le potiron est en magasin vous pouvez être sûr qu\'il est mur. On reconnaît une courge mûre à sa couleur bien sûr, \
        mais surtout à son pédoncule qui devra être très sec. Le feuillage sera à ce moment-là jauni,\
        et même la plupart du temps complètement desséché. Très important, vous devez absolument récolter vos courges avant les premières gelées.',
        conservation: 'Un espace bien ventilé, à l\'abri du froid et une température comprise entre 14 et 20 degrés convient parfaitement.\
        Compter jusqu\'à 6 mois de conservation. En tranches : envelopper les tranches dans un film célophane et conserver au réfrigérateur une semaine.',
      },
      {
        picto:require('@/assets/images/picto_legumes/picto_tomate.png'),
        label: 'Tomate',
        maturite: 'les tomates rouges sont mûres.Pour choisir de bonnes tomates, il faut avant tout humer leur parfum. C\'est le premier indice qui vous mettra\
        sur la voie de tomates goûteuses. Il doit être vert et prononcé, notamment au niveau du pédoncule. Pour savoir si une variété de tomate verte est mûre, vous verrez sa couleur\
        tourner légèrement vers un vert-jaunâtre. La tomate  \'Raisin vert\' est une tomate cerise avec des fruits assez gros réunis en grappes de 8 à 10 petites tomates.',
        conservation: 'L\'endroit idéal pour conserver vos tomates est dans un lieu frais (12°C). Ainsi, elles resteront bonnes pendant 1 semaine. Il vaut mieux ne pas les conserver\
        à proximité de concombres, de brocolis, d\'aubergines, de champignons et de choux.',
      },
      {
        picto:require('@/assets/images/picto_legumes/picto_petits_poids.png'),
        label: 'Petits poids',
        maturite: 'Choisissez des petit-pois à la cosse vert vif, bien ferme. Hors saison, craquez pour les petit-pois surgelés, bien meilleurs au goût que ceux en conserve et\
        qui gardent toutes leurs vitamines. Quelques minutes dans l\'eau bouillante salée et vous n\'avez plus qu\'à vous régaler ! Pour garder la belle couleur verte des\
        petit-pois, vous pouvez aussi les plonger dans de l\'eau glacée juste après les avoir égouttés pour fixer la chlorophylle.',
        conservation: 'Les petits pois frais se conservent très peu de temps: seulement 2 à 3 jours dans leur gousse, dans le bac du réfrigérateur. Les petits poids écossés seront encore plus fragiles.\
        Si vous voulez garder vos petits pois plus longtemps, mieux vaudra envisager de les congeler ou de les stériliser.',
      }

    ],

    fruits_illustration:{
      ananas:require('@/assets/images/block_fruits/ananas.png'),
      pasteque:require('@/assets/images/block_fruits/pasteque.png'),
      poire:require('@/assets/images/block_fruits/poire.png')
    },

    legumes_illustration:{
      aubergine:require('@/assets/images/block_legume/aubergine.png'),
      avocat:require('@/assets/images/block_legume/avocat.png'),
      brocoli:require('@/assets/images/block_legume/brocoli.png')
    }
  },

  mutations: {},
  actions: {},
  modules: {}
})