import * as AlertDialog from '@radix-ui/react-alert-dialog'

interface AlertDialogProps extends AlertDialog.AlertDialogProps {
  title: string
  message?: string
  icon?: JSX.Element
  trigger?: JSX.Element
  cancel?: JSX.Element
  action?: JSX.Element
}

export function CheckoutDialog({
  title,
  message,
  icon,
  trigger,
  cancel,
  action,
  ...props
}: AlertDialogProps) {
  return (
    <AlertDialog.Root {...props}>
      <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-zinc-900 fixed inset-0 ease-in duration-300 opacity-70" />
        <AlertDialog.Content className="z-50 w-[21rem] md:w-96 bg-zinc-800 px-8 py-8 rounded-xl shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg max-h-screen focus:outline-none">
          <div>
            <AlertDialog.Title className="m-0 text-xl text-center text-zinc-100">
              {title}
            </AlertDialog.Title>
            <AlertDialog.Description className="flex flex-col items-center gap-4 py-5">
              {message}
              {icon}
            </AlertDialog.Description>
          </div>
          <div className="flex items-center justify-end">
            <AlertDialog.Cancel asChild>{cancel}</AlertDialog.Cancel>
            <AlertDialog.Action>{action}</AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
