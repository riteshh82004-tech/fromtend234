import { QRCodeSVG } from 'qrcode.react'
import { getVerificationUrl } from '../../data/interns'

interface CertificateQRCodeProps {
  slug: string
  size?: number
}

export function CertificateQRCode({ slug, size = 120 }: CertificateQRCodeProps) {
  const url = getVerificationUrl(slug)

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="rounded-lg border border-base-300 bg-white p-2 shadow-sm">
        <QRCodeSVG
          value={url}
          size={size}
          level="M"
          includeMargin={false}
          aria-label={`QR code linking to certificate verification at ${url}`}
        />
      </div>
      <p className="text-base-content/50 max-w-[140px] text-center text-[10px] leading-tight">
        Scan to verify this certificate
      </p>
    </div>
  )
}
