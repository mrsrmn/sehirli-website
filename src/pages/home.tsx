import { For, createSignal, onCleanup, onMount, type Component } from 'solid-js';

import styles from '../App.module.css';
import Decode from '../components/Decode';
import ImageSlot from '../components/ImageSlot';
import StoreButtons from '../components/StoreButtons';

const nf = new Intl.NumberFormat('tr-TR');

/* The design seeds these from DCLogic and then only moves them on
   'sehirli-tick' events, which the live map emits. No map is placed in the
   design, so they hold at their seeded values. */
const ACTIVE = 1284;
const VERIFIED = 8913;

const STEPS = [
  {
    kicker: '01 / BİLDİR',
    tone: styles.kickerRed,
    title: 'Gördüğünü paylaş',
    body: 'Olayı konumu, fotoğrafı ve tek satırlık açıklamasıyla saniyeler içinde ağa bırak. Kayıt anında haritaya düşer.',
  },
  {
    kicker: '02 / DOĞRULA',
    tone: styles.kickerAmber,
    title: 'Bildirimler çakıştırılır',
    body: 'Aynı bölgeden gelen kayıtlar konum ve zaman ekseninde eşleştirilir. Birbirini doğrulayan bildirimler öne çıkar, tekil kayıtlar beklemede kalır.',
  },
  {
    kicker: '03 / UYAR',
    tone: styles.kickerBlue,
    title: 'Yalnızca yakınındakiler',
    body: 'Doğrulanan olay, belirlediğin yarıçap ve eşiklere uyuyorsa bildirim olarak sana ulaşır. Gerisi haritada kalır.',
  },
];

const SHOTS = [
  { id: 'harita', label: 'Harita ekranı', caption: 'HARİTA GÖRÜNÜMÜ' },
  { id: 'detay', label: 'Bildirim detayı', caption: 'OLAY DETAYI' },
  { id: 'uyari', label: 'Uyarı ayarları', caption: 'UYARI AYARLARI' },
];

const FEATURES = [
  {
    title: 'Canlı harita',
    body: 'Olaylar ağa düştüğü anda görünür; sayfa yenilemek gerekmez.',
  },
  {
    title: 'Yarıçap uyarıları',
    body: 'Ev, iş ve güzergâh için ayrı yarıçap tanımla. Yalnızca o alan seni uyarsın.',
  },
  {
    title: 'Kanıtla birlikte',
    body: 'Fotoğraf ve kısa video ekle; bildirimi görenler ne olduğunu kendi gözüyle görsün.',
  },
  {
    title: 'Sessiz saatler',
    body: 'Eşik ve saat aralığı belirle; kritik olmayan bildirimler beklesin.',
  },
  {
    title: 'Olay geçmişi',
    body: 'Bir mahallede son 30 günde ne olduğunu tek ekranda gör.',
  },
  {
    title: 'Konum gizliliği',
    body: 'Bildirim gönderirken kimliğin görünmez; konumun yalnızca olayı haritaya yerleştirmek için kullanılır.',
  },
];

const Home: Component = () => {
  const [latency, setLatency] = createSignal(94);

  onMount(() => {
    const id = setInterval(
      () => setLatency(82 + Math.floor(Math.random() * 26)),
      3200
    );
    onCleanup(() => clearInterval(id));
  });

  return (
    <>
      <section class={styles.hero}>
        <div class={styles.heroCopy}>
          <Decode
            class={styles.heroEyebrow}
            text="TÜRKİYE • GERÇEK ZAMANLI OLAY AĞI"
            delay={40}
          />
          <h1 class={styles.heroTitle}>
            <Decode class={styles.heroLine} text="Olaylar olurken" delay={120} />
            <Decode class={styles.heroLine} text="gör." delay={620} />
          </h1>
          <p class={styles.heroBody}>
            Şehirli, insanların paylaştığı olayları saniyeler içinde haritaya
            taşır. Bildirimler konumla eşleşir, birbirini doğrular ve yalnızca
            seni ilgilendiren yarıçapta uyarıya dönüşür.
          </p>
          <StoreButtons
            class={styles.heroButtons}
            iosHref="#indir"
            androidHref="#indir"
          />
          <div class={styles.heroNote}>Ücretsiz • Reklamsız</div>
        </div>

        <div class={styles.heroArt}>
          <div class={styles.phone}>
            <div class={styles.phoneNotch} />
            <div class={styles.phoneScreen}>
              <ImageSlot label="Uygulama ekran görüntüsü" />
            </div>
          </div>
        </div>
      </section>

      <section class={styles.stats}>
        <div class={styles.statsInner}>
          <div class={styles.stat}>
            <div class={styles.statValue}>{nf.format(ACTIVE)}</div>
            <div class={styles.statLabel}>ŞU AN AKTİF OLAY</div>
          </div>
          <div class={styles.stat}>
            <div class={styles.statValue}>{nf.format(VERIFIED)}</div>
            <div class={styles.statLabel}>24 SAATTE DOĞRULANAN</div>
          </div>
          <div class={styles.stat}>
            <div class={styles.statValue}>81</div>
            <div class={styles.statLabel}>KAPSANAN İL</div>
          </div>
          <div class={styles.stat}>
            <div class={styles.statValue}>{latency()} sn</div>
            <div class={styles.statLabel}>ORT. DOĞRULAMA SÜRESİ</div>
          </div>
        </div>
      </section>

      <section id="nasil" class={styles.section}>
        <div class={styles.eyebrow}>01 — İŞLEYİŞ</div>
        <h2 class={styles.sectionTitle}>Bildirimden uyarıya, üç adım</h2>
        <div class={`${styles.hairlineGrid} ${styles.steps}`}>
          <For each={STEPS}>
            {(step) => (
              <div class={styles.step}>
                <div class={`${styles.stepKicker} ${step.tone}`}>
                  {step.kicker}
                </div>
                <h3 class={styles.stepTitle}>{step.title}</h3>
                <p class={styles.stepBody}>{step.body}</p>
              </div>
            )}
          </For>
        </div>
      </section>

      <section id="ozellikler" class={styles.section}>
        <div class={styles.eyebrow}>02 — ÖZELLİKLER</div>
        <h2 class={styles.sectionTitle}>Uygulamanın içinde</h2>

        <div class={styles.shots}>
          <For each={SHOTS}>
            {(shot) => (
              <div class={styles.shotCard}>
                <div class={styles.shotFrame}>
                  <ImageSlot label={shot.label} />
                </div>
                <div class={styles.shotLabel}>{shot.caption}</div>
              </div>
            )}
          </For>
        </div>

        <div class={`${styles.hairlineGrid} ${styles.features}`}>
          <For each={FEATURES}>
            {(feature) => (
              <div class={styles.feature}>
                <h3 class={styles.featureTitle}>{feature.title}</h3>
                <p class={styles.featureBody}>{feature.body}</p>
              </div>
            )}
          </For>
        </div>
      </section>

      <section class={styles.statement}>
        <div class={styles.statementInner}>
          <div class={`${styles.eyebrow} ${styles.statementEyebrow}`}>
            03 — BAĞIMSIZLIK
          </div>
          <p class={styles.statementText}>
            Şehirli, herkesten önce parmağının ucundan tüm olup biteni görmeni
            hedefliyor. İnsanların paylaştıkları olayları anında haritada
            görebilecek, kendin gördüğün olayları da paylaşabileceksin. Şehirli,
            sadece bir sosyal medya değil;{' '}
            <span class={styles.statementMark}>bağımsız</span> bir haber aracı.
          </p>
        </div>
      </section>

      <section id="indir" class={styles.download}>
        <div class={styles.downloadInner}>
          <h2 class={styles.downloadTitle}>Ağa katıl</h2>
          <p class={styles.downloadBody}>
            Uygulamayı indir, yarıçapını belirle. İlk bildiriminden itibaren
            şehrin ne olduğunu senden önce kimse söylemesin.
          </p>
          <StoreButtons iosHref="#" androidHref="#" />
        </div>
      </section>
    </>
  );
};

export default Home;
